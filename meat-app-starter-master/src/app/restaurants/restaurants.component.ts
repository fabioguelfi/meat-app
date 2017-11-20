import { Component, OnInit } from '@angular/core'
import {RestaurantInterface} from './restaurant/restaurant.model'
import { RestaurantsService } from 'app/restaurants/restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

restaurants: RestaurantInterface[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restaurantsService.restaurants()
  }
}
