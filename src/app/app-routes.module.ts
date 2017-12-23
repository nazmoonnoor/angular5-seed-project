import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ContentsModule } from './components/contents/contents.module';
import { ModuleAgainModule } from './components/module-again/module-again.module';
import { ModuleModule } from './components/module/module.module';

import { HomeComponent } from './components/contents/home/home.component';
import { NotFoundComponent } from './components/contents/not-found/not-found.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'content', loadChildren: () => ContentsModule },
    { path: 'module', loadChildren: () => ModuleModule },
    { path: 'module-again', loadChildren: () => ModuleAgainModule },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        ContentsModule,
        ModuleModule,
        ModuleAgainModule
    ],
    exports: [
        RouterModule,
        ContentsModule,
        ModuleModule,
        ModuleAgainModule
    ],
    declarations: []
})
export class AppRoutesModule { }
