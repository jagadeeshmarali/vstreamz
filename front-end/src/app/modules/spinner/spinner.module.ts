import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner.component";
import { SpinnerService } from "./spinner.service";

@NgModule({
  imports: [],
  declarations: [
    SpinnerComponent
  ],
  providers: [SpinnerService],
  bootstrap: [],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule { }
