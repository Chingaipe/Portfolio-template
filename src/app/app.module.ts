import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// navigation routers
const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
