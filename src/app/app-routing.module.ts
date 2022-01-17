import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReposComponent } from './components/repos/repos.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'search-results/:query', component: SearchResultsComponent},
  { path: 'userdetails/:id', component: UserdetailsComponent},
  { path:'repos', component:ReposComponent },
  { path: 'repositories/:query', component: RepositoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
