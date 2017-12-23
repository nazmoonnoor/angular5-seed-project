import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutsModule } from './layouts/layouts.module';
import { ControlsModule } from './controls/controls.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
    bootstrap: [
      AppComponent
    ],
    imports: [
        LayoutsModule,
        CoreModule,
        ControlsModule,
        SharedModule
    ],
    exports: [
        CoreModule
    ],
    declarations: [
        AppComponent
    ]
})

export class AppModule { }
