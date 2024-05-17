import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Offer } from './offer/offer.component'
import { Location } from './location/location.component'
import { Guide } from './guide/guide.component'
import { Feature } from './feature/feature.component'
import { Article } from './article/article.component'

@NgModule({
  declarations: [Offer, Location, Guide, Feature, Article],
  imports: [CommonModule, RouterModule],
  exports: [Offer, Location, Guide, Feature, Article],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
