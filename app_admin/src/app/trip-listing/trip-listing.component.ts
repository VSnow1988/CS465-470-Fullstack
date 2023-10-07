import { Component, OnInit } from '@angular/core';
// import { trips } from '../data/trips';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

  //trips: Array<any> = trips;
  trips: Trip[]; // Define 'trips' as an array of Trip objects

  message: string;

  constructor(private tripDataService: TripDataService) { }

  // Function to call the service's getTrips()
  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    // Store the returned Trips in a local class variable
    this.tripDataService
      .getTrips()
        .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No trips found';
          this.trips = foundTrips;
        });
  }
  // Invoke local getTrips function when class is initialized
  ngOnInit() {
    this.getTrips();
  }

}
