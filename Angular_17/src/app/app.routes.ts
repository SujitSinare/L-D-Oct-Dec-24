import { Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './topics/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './topics/reactive-form-validation/reactive-form-validation.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { SignalComponent } from './topics/signal/signal.component';
import { ParentComponent } from './topics/component-communication/parent/parent.component';
import { AnimationComponent } from './topics/animation/animation.component';
import { DeferredLoadingComponent } from './topics/deferred-loading/deferred-loading.component';
import { HttpImplementationComponent } from './topics/http-implementation/http-implementation.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'templateFormValidation',
        pathMatch: 'full'
    },
    {
        path: 'templateFormValidation',
        component: TemplateFormValidationComponent
    },
    {
        path: 'reactiveFormValidation',
        component: ReactiveFormValidationComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'communication',
        component: ParentComponent
    },
    {
        path: 'animation',
        component: AnimationComponent
    },
    {
        path: 'lazy-loading',
        loadComponent: () => import('./topics/lazy-loading/lazy-loading.component').then(c => c.LazyLoadingComponent)
    },
    {
        path: 'deferred-loading',
        component: DeferredLoadingComponent
    },
    {
        path: 'http-implementation',
        component: HttpImplementationComponent
    }
];
