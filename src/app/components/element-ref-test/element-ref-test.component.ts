import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-element-ref-test',
  templateUrl: './element-ref-test.component.html',
  styleUrls: ['./element-ref-test.component.scss'],
    host: { class: 'container' },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementRefTestComponent implements AfterViewInit {
    @ViewChild('someName') public input!: ElementRef<HTMLInputElement>;

    public isLoaded = false;

    public get testValue(): string {
        return this.input.nativeElement.value || 'placeholder';
    }

    public ngAfterViewInit(): void {
        this.isLoaded = true;
    }
}
