import { Injectable } from '@angular/core';
import { project, tecnologia } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class projectService {

  constructor() { }
  
  private projects : project[] = [
    //1
    { title: "Red Social",
     tecnologias: [ 
        { tecnologia: "Angular", estilo: { 'background': 'linear-gradient(-225deg,#e432322f 0%,rgb(242, 24, 24) 48%,#ff0101 100%'}, src: "../../../../assets/icons/angularIcon.png"},
        { tecnologia: "NestJS", estilo: { 'background': 'linear-gradient(-225deg,#000000 0%,rgb(0, 0, 0) 28%,#000000 100%)'}, src: "../../../../assets/icons/nestJSIcon.png"},       
        // { tecnologia: "Docker", estilo: { 'background': 'linear-gradient(-225deg,#3270e4 0%,rgb(24, 100, 242) 48%,#013cff 100%)'}, src: "../../../../assets/icons/docker.png"},
        { tecnologia: "MongoDB", estilo: { 'background': 'linear-gradient(-225deg,#1b5f31 0%,rgb(11, 85, 33)48%,#003303 100%)'}, src: "../../../../assets/icons/mongoDBIcon.png"},
      ],
      descripccion: `Projecto personal de una red social funcional que cuenta con un sistema de login,
          rutas protegidas por guards y autenticacion segura con JWT (Json Web Tokens), se utilizo Angular para el frontend, NestJS para desarrollar el backend, MongoDB como base de datos y
          docker para montar la base
       
       `,
       dificultad: 65
      
    },
    //2
    { title: "Backend",
     tecnologias: [ 
       
        { tecnologia: "Docker", estilo: { 'background': 'linear-gradient(-225deg,#3270e4 0%,rgb(24, 100, 242) 48%,#013cff 100%)'}, src: "../../../../assets/icons/docker.png"},
        { tecnologia: "MongoDB", estilo: { 'background': 'linear-gradient(-225deg,#1b5f31 0%,rgb(11, 85, 33)48%,#003303 100%)'}, src: "../../../../assets/icons/mongoDBIcon.png"},
      ]
    },
    //1
    { title: "Portafolio",
     tecnologias: [ 
        { tecnologia: "Angular", estilo: { 'background': 'linear-gradient(-225deg,#e432322f 0%,rgb(242, 24, 24) 48%,#ff0101 100%'}, src: "../../../../assets/icons/angularIcon.png"},
        { tecnologia: "NestJS", estilo: { 'background': 'linear-gradient(-225deg,#000000 0%,rgb(0, 0, 0) 28%,#000000 100%)'}, src: "../../../../assets/icons/nestJSIcon.png"},       
       
      ]
    },

    // //TESTING
    { title: "Portafolio",
     tecnologias: [ 
        { tecnologia: "Angular", estilo: { 'background': 'linear-gradient(-225deg,#e432322f 0%,rgb(242, 24, 24) 48%,#ff0101 100%'}, src: "../../../../assets/icons/angularIcon.png"},
        { tecnologia: "NestJS", estilo: { 'background': 'linear-gradient(-225deg,#000000 0%,rgb(0, 0, 0) 28%,#000000 100%)'}, src: "../../../../assets/icons/nestJSIcon.png"},       
       
      ]
    },
    { title: "Portafolio",
     tecnologias: [ 
        { tecnologia: "Angular", estilo: { 'background': 'linear-gradient(-225deg,#e432322f 0%,rgb(242, 24, 24) 48%,#ff0101 100%'}, src: "../../../../assets/icons/angularIcon.png"},
        { tecnologia: "NestJS", estilo: { 'background': 'linear-gradient(-225deg,#000000 0%,rgb(0, 0, 0) 28%,#000000 100%)'}, src: "../../../../assets/icons/nestJSIcon.png"},       
       
      ]
    },
    { title: "Portafolio",
     tecnologias: [ 
        { tecnologia: "Angular", estilo: { 'background': 'linear-gradient(-225deg,#e432322f 0%,rgb(242, 24, 24) 48%,#ff0101 100%'}, src: "../../../../assets/icons/angularIcon.png"},
        { tecnologia: "NestJS", estilo: { 'background': 'linear-gradient(-225deg,#000000 0%,rgb(0, 0, 0) 28%,#000000 100%)'}, src: "../../../../assets/icons/nestJSIcon.png"},       
       
      ]
    },
    { title: "Portafolio",
     tecnologias: [ 
        { tecnologia: "Angular", estilo: { 'background': 'linear-gradient(-225deg,#e432322f 0%,rgb(242, 24, 24) 48%,#ff0101 100%'}, src: "../../../../assets/icons/angularIcon.png"},
        { tecnologia: "NestJS", estilo: { 'background': 'linear-gradient(-225deg,#000000 0%,rgb(0, 0, 0) 28%,#000000 100%)'}, src: "../../../../assets/icons/nestJSIcon.png"},       
       
      ]
    },


  ]

  getProjects(): project[]{
    return this.projects
  }
  

  getProjectByTitle(projectTitle: string): project[]{

    return this.projects.filter( project => project.title == projectTitle )
  }
}
