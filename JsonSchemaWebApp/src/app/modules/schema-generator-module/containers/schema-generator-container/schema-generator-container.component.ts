import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-schema-generator-container',
  templateUrl: './schema-generator-container.component.html',
  styleUrls: ['./schema-generator-container.component.scss']
})
export class SchemaGeneratorContainerComponent {
  @ViewChildren('tabContent', {read: ElementRef}) tabContents!: QueryList<ElementRef>;
  public panes = [
    {name: 'Json #1', content: '0',contentCounter:0},
    {name: '+', content: '',contentCounter: -1},
  ];
  activePane = 0;
  contentCounter=2;
  onTabChange($event: number) {
    this.activePane = $event;
    console.log('onTabChange', $event);
    if ($event === this.panes.length - 1) {
      this.panes.pop();
      this.panes.push({name: 'Json #' + this.contentCounter, content: this.contentCounter.toString(),contentCounter: this.contentCounter})
      this.panes.push({name: '+', content: '',contentCounter: -1})
      this.contentCounter++;
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {  console.log(this.tabContents.toArray().map(el => el.nativeElement.innerHTML));
  }

  onDelete(activePane: number): void {
    if (this.panes.length !== 2) {
      console.log(this.panes)
      this.panes.splice(activePane, 1);
    }
    this.activePane!==0?this.activePane--:this.activePane;
  }
}
