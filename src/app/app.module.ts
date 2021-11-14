import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PromotionComponent } from './home/promotion/promotion.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { PriceTableComponent } from './home/price-table/price-table.component';
import { FeaturesComponent } from './home/features/features.component';
import { SupportComponent } from './home/support/support.component';
import { FaqComponent } from './home/faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmailComponent } from './email/email.component';
import { ContactComponent } from './contact/contact.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		PromotionComponent,
		CarouselComponent,
		PriceTableComponent,
		FeaturesComponent,
		SupportComponent,
		FaqComponent,
		FooterComponent,
		PageNotFoundComponent,
		EmailComponent,
		ContactComponent,
		DataTableComponent,
		AboutComponent,
		TermsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
