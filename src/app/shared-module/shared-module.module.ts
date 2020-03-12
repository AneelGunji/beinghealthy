import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../components/widgets/categories/categories.component';
import { WhyWeChooseComponent } from '../components/widgets/why-we-choose/why-we-choose.component';
import { CopyrightComponent } from '../components/widgets/copyright/copyright.component';
import { SocialComponent } from '../components/widgets/social/social.component';

@NgModule({
  declarations: [
    SocialComponent,
    CategoriesComponent,
    WhyWeChooseComponent,
    CopyrightComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
