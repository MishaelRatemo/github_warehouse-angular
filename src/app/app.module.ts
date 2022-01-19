import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { TimepassedPipe } from './pipes/timepassed.pipe';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { ReposComponent } from './components/repos/repos.component';
import { RepositoriesComponent } from './components/repositories/repositories.component'
import { NgHttpLoaderModule } from 'ng-http-loader';
import { WarniningDirective } from './directives/warnining.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    UserdetailsComponent,
    TimepassedPipe,
    TopnavbarComponent,
    ReposComponent,
    RepositoriesComponent,
    WarniningDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
