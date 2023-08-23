import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishDetailsComponent } from './fish-details/fish-details.component';
import { AllFishComponent } from './all-fish/all-fish.component';

const routes: Routes = [
	{ path: '', redirectTo: '/fish', pathMatch: 'full' },
	{ path: 'fish', component: AllFishComponent },
	{ path: 'fish/:id', component: FishDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
