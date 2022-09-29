import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  constructor(private router: Router, private activedRoute: ActivatedRoute) {
    // Obtém o objeto enviado pela navegação (extra)
    console.log(this.router.getCurrentNavigation().extras.state);

    // Obtém o valor do parâmetro id
    console.log(this.activedRoute.snapshot.paramMap.get('id'));
    
  }

  ngOnInit() {}
}
