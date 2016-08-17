import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <div class="row">
                <section class="col-md-8 col-md-offset-2">
                    <p>Hello</p>
                </section>
            </div>
        </div>
    `
})
export class AppComponent {

}