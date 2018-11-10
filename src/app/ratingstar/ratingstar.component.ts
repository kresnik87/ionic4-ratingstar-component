import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-ratingstar',
    templateUrl: './ratingstar.component.html',
    styleUrls: ['./ratingstar.component.scss']
})
export class RatingstarComponent implements OnInit {

    rating_n: number;
    color: string;
    array_star: string[];

    constructor() {
    }

    ngOnInit() {
    }

    @Input() set rating(rating: any) {
        let max_rate = 5;
        let rounded_rating = Math.round(rating);
        let array_stars = new Array(max_rate);
        array_stars.fill('star-outline');

        for (let i = 0; i < rounded_rating; i++) {
            array_stars[i] = 'star';

            if (i === rounded_rating - 1 && rating % 1 !== 0) {
                array_stars[i] = 'star-half';
            }
        }
        this.array_star = array_stars;
        console.log(this.array_star);
    }

    get rating() {
        return this.rating_n;
    }

    @Input() set colorName(value: any) {
        this.color = value;
    }

    get colorName() {
        return this.color;
    }

}
