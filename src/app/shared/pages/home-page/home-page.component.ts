import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../interfaces/project.interface';
import { projectService } from '../../service/projects.service';


@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  private router: Router = inject(Router)
  private projectService = inject(projectService)

  public projects = this.projectService.getProjects();

  redirectContact(): void{
    this.router.navigate(["/contact"])
  }

  

}
