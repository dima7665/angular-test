import {Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: 'test-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public list: number[] = [];

    public ngOnInit(): void {
        this.list = [ 1, 2, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12 ];
    }

    public drop(event: CdkDragDrop<number[], any>): void {
        console.log('event - ', event);

        const { currentIndex, previousIndex } = event;

        if (previousIndex === currentIndex) {
            return;
        }

        moveItemInArray(this.list, previousIndex, currentIndex);
    }

    public printList(): void {
        console.log('list - ', this.list);
    }
}
