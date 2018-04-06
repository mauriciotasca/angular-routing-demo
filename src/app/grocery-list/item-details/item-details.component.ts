import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  public name = '';
  public description: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.pickItemDescription();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private pickItemDescription() {
    switch (this.name) {
      case 'banana': {
        this.description = 'An edible fruit – botanically a berry.';
        break;
      }
      case 'coffee': {
        this.description = 'A brewed drink prepared from roasted coffee beans.';
        break;
      }
      case 'milk': {
        this.description = 'A white liquid produced by the mammary glands of mammals.';
        break;
      }
      case 'rice': {
        this.description = 'The seed of the grass species Oryza.';
        break;
      }
      default: {
        break;
      }
    }
  }
}
