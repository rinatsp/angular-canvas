# AngularCanvas

Angular canvas renderer with support custom elements.


# Getting started

`npm i --save angular-canvas`

Create canvas element:

```ts
import { CanvasElement, NgCanvasElement, NgCanvas } from 'angular-canvas';

@CanvasElement({
  selector: 'graph-line'
})
export class GraphLineElement implements NgCanvasElement {
    public parent: NgCanvas; // parent element
    public needDraw: boolean;

    setNgProperty(name: string, value: any): void {
      this[name] = value;

      // redraw all element in one canvas context after set ng property
      this.parent.drawAll(); 
    }
  
    draw(context: CanvasRenderingContext2D, time: number): void {
      context.strokeStyle = 'red';
      ...
    }
}
```

Register this element in module

```ts
import { CanvasDomModule } from 'angular-canvas';
...

@NgModule({
...
imports: [
    CanvasDomModule.forRoot(
    [
      GraphLineElement,
      ...
    ]
  ),
```

And declare component `use canvas render`
@CanvasComponent

component.ts
```ts
@CanvasComponent
@Component({
  selector: 'app-graph-canvas-example',
  templateUrl: './graph-canvas-example.component.html',
  styleUrls: ['./graph-canvas-example.component.scss'],
})
```

component.html
```html
<p>Graph example</p>

<canvas class="first">
  <rect [x]="mouseX" [y]="20" w="20" h="20"></rect>
  <line [x1]="10" [x2]="100" [y1]="10" [y2]="200"></line>
</canvas>
<canvas>
  <graph-line [data]="data" [step]="step" [deltaX]="deltaX" strokeStyle="orange" ></graph-line>
  <graph-line [data]="data2" [step]="step"  [deltaX]="deltaX"  strokeStyle="green"></graph-line>
  <graph-line [data]="data3" [deltaX]="deltaX" strokeStyle="blue" ></graph-line>
</canvas>

```

<img src ="https://github.com/irustm/angular-canvas/blob/master/assets/graph-example.png?raw=true">


Game example:



# API

`NgCanvas` - main component with selector `canvas`
```ts
  public element: HTMLCanvasElement;
  public drawAll(): void; // redraw all register elements in one canvas context

```
---

`NgCanvasElement` - canvas element interface for register in module 
```ts
  style?: CSSStyleDeclaration;
  classList?: DOMTokenList;
  needDraw?: boolean; // canvas element redraw until all NgCanvasElement needDraw as true
  parent: NgCanvas; // canvas parent element

  /**
  * Method for draw element, *time* - requestAnimationTime
  */
  draw(context: CanvasRenderingContext2D, time?: number): void; 

  // standart renderer methods

  appendChild?(newChild: any): void;

  addClass?(name): void;

  insertBefore?(newChild: any, refChild: any): void;

  setNgAttribute?(name: string, value: string, namespace?: string | null): void;

  setAttribute?(name: string, value: string, namespace?: string | null): void;

  setNgProperty?(name: string, value: any): void;

  setStyle?(style: string, value: any, flags?: RendererStyleFlags2): void;

  setValue?(value: any): void;

  removeAttribute?(name: string, namespace?: string | null): void;

  removeChild?(oldChild: any): void;

  removeClass?(name: string): void;

  removeStyle?(style: string, flags?: RendererStyleFlags2): void;

  setAttributeNS?(namespaceUri: string, name: string, value: string): void;

  removeAttributeNS?(namespaceUri: string, name: string): void;
```

---
`CanvasComponent` - Decorator, need for use canvas renderer

---

`CanvasElement` - Decorator, for register canvas elements in storage metadata
support only one parameter: `selector`

---

`CanvasDomModule.forRoot([])` register elements in AppModule
