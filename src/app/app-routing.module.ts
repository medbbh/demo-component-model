import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";

const routes : Routes = [
    {
        path:'',
        redirectTo:'/list',
        pathMatch: 'full',
    },
    {
        path:'list',
        component: ListComponent,
    },
    {
        path:'parent',
        component: ParentComponent,
    },
    {
        path:'child/:id',
        component:ChildComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}