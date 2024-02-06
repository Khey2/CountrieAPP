import { Component, OnInit } from '@angular/core';
import { projectService } from '../../service/projects.service';
import { project } from '../../interfaces/project.interface';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-information-about-project-page',
  templateUrl: './information-about-project-page.component.html',
  styleUrl: './information-about-project-page.component.css'
})
export class InformationAboutProjectPageComponent implements OnInit {

  constructor(
    private projectService: projectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
    
    }
   

    public projecto: project[] = [] 

  ngOnInit() {
   const param  = this.activatedRoute.snapshot.params["id"]
   const resp = this.projectService.getProjectByTitle(param);

   console.log(resp)
   if (resp.length == 0) return this.router.navigateByUrl("/");

   this.projecto = resp;
   return

  } 

  test(){
    console.log(this.projecto)
  }

} 
