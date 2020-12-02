import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

//import { HeroService } from '../hero.service';
import { crisis } from '../crisis-detail';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    
  ) {}

  ngOnInit() {
    this.route.data
    .subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
    
  }

  gotoCrises(crisis: crisis) {
    const heroId = crisis ? crisis.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // Relative navigation back to the crises
this.router.navigate(['../', { id: crisis.Id, foo: 'foo' }], { relativeTo: this.route });
  }

  cancel() {
    this.gotoCrises();
  }
  
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
}

/*
  this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
*/