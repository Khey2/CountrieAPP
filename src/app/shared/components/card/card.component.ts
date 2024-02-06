import { Component, Input, OnInit, inject } from '@angular/core';
import { project } from '../../interfaces/project.interface';
import { projectService } from '../../service/projects.service';
import { Router } from '@angular/router';


@Component({
  selector: 'shared-project-card',
  templateUrl: './card.component.html',
  styleUrl: "./card.component.css"
})
export class CardComponent implements OnInit{

  constructor( private projectService: projectService){}
  private router = inject(Router)

  @Input()
  public project!: project;

  @Input()
  public indice!: project;


  ngOnInit(): void {
    if ( !this.project ) throw new Error("la propiedad project es requerida")
  }

  moreInformation(){
    console.log(this.indice)
    this.router.navigate([`/projects/${this.indice.title}`]);
  }
}
