import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AsideComponent } from './aside/aside.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import { TitlebarComponent } from './titlebar/titlebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { Aside1Component } from './aside1/aside1.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    AsideComponent,
    TitlebarComponent,
    Aside1Component,
    AboutComponent,
    GithubComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
