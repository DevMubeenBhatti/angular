import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { ContactComponent } from './contact/contact.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'email', component: EmailComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'data-table', component: DataTableComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'trems', component: TermsComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }