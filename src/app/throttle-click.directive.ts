import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import { Subject } from "rxjs";
import { throttleTime } from "rxjs/operators";

/**
 * クリック連打を防止するためのディレクティブです。
 */
@Directive({
  selector: "[appThrottleClick]"
})
export class ThrottleClickDirective {
  @Output() throttleClick = new EventEmitter();
  private clicks = new Subject();

  constructor() {}

  ngOnInit() {
    this.clicks
      .pipe(throttleTime(1500)) // Throttleを設定します
      .subscribe(e => this.throttleClick.emit(e));
  }

  /**
   * クリックイベントをハンドリングします。
   */
  @HostListener("click", ["$event"])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
