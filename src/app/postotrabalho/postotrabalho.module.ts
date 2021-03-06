import { UpperCaseModule } from './../uppercase/uppercase.module';
import { MatNativeDateModule } from '@angular/material';
import { MyMaterialModule } from './../my-material/my-material.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostoTrabalhoListComponent } from './postotrabalho-list.component';
import { PostoTrabalhoFormComponent } from './postotrabalho-form.component';
import { PostoTrabalhoService } from './postotrabalho.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostoTrabalhoRoutingModule } from './postotrabalho-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MyMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    UpperCaseModule,
    PostoTrabalhoRoutingModule
  ],
  declarations: [
    PostoTrabalhoListComponent,
    PostoTrabalhoFormComponent
  ],
  providers: [PostoTrabalhoService]
})
export class PostoTrabalhoModule { }
