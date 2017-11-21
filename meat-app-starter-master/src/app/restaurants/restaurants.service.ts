import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch' 
import { RestaurantInterface } from "app/restaurants/restaurant/restaurant.model"
import { MEAT_API } from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantsService {
    
    constructor(private http: Http){}

    restaurants(): Observable<RestaurantInterface[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<RestaurantInterface>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurants(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}