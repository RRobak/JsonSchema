import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-schema-generator-container',
  templateUrl: './schema-generator-container.component.html',
  styleUrls: ['./schema-generator-container.component.scss']
})
export class SchemaGeneratorContainerComponent {
  @ViewChild('target') target!: ElementRef;
  @ViewChildren('tabContent', {read: ElementRef}) tabContents!: QueryList<ElementRef>;
  public panes = [
    {name: 'Json #1', content: '0', contentCounter: 0},
    {name: '+', content: '', contentCounter: -1},
  ];
  activePane = 0;
  contentCounter = 1;
  visible = false
  modalValueFirst!:string;
  modalValueMiddle!:string;
  modalValueLast!:string;

  onTabChange($event: number) {
    this.activePane = $event;
    console.log('onTabChange', $event);
    if ($event === this.panes.length - 1) {
      this.panes.pop();
      let thisPotato = this.contentCounter + 1
      this.panes.push({
        name: 'Json #' + thisPotato,
        content: this.contentCounter.toString(),
        contentCounter: this.contentCounter
      })
      this.panes.push({name: '+', content: '', contentCounter: -1})
      this.contentCounter++;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  onDelete(activePane: number): void {
    if (this.panes.length !== 2) {
      console.log(this.panes)
      this.panes.splice(activePane, 1);
    }
    this.activePane !== 0 ? this.activePane-- : this.activePane;
  }

  onSend() {
    let combineJsoned = [];
    let namesOfBadJsons: string='';
    this.panes.forEach(element => {
      let textArea = document.getElementById(element.content) as HTMLInputElement;
      if (textArea) {
        if (this.isJSON(textArea.value)) {
          combineJsoned.push(textArea.value)
        } else {
          namesOfBadJsons += element.name + ' '
        }
      }
    })
    if(namesOfBadJsons===''){
      this.modalValueFirst='Wszystkie pliki zostały przesłane'
    }
    else{
      this.modalValueFirst='Pliki z zakładek '
      this.modalValueMiddle=namesOfBadJsons
      this.modalValueLast='były niepoprawne i zostały pominięte'
    }
    let el = document.getElementById('target');
    el?.scrollIntoView();
    this.visible=true


  }


  isJSON(data: string): boolean {
    try {
      const obj = JSON.parse(data);
      return !!obj && typeof obj === 'object';
    } catch (error) {
      return false;
    }
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleModal() {
    this.visible = !this.visible;
  }
}
