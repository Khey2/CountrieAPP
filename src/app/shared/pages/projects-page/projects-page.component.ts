import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { project, tecnologia } from '../../interfaces/project.interface';
import { projectService } from '../../service/projects.service';
import { filtrosTeconologias } from '../../interfaces/filtros-tecnologias.interface';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent   {

 
  constructor( 
    private projectsService : projectService,
    ){

  }

  //
  //todos los projectos
  public projects: project[] = this.projectsService.getProjects();

  public tecnologias: filtrosTeconologias[] = [
    {name: 'Angular', isSelected: false} , 
    {name: 'NestJS', isSelected: false} ,
    {name: 'Docker',isSelected: false} ,
    {name: 'MongoDB', isSelected: false}
  ];

  //filtros [""]
  selectedOptions: string[] = [];

  
  public arrayHelper = [];
  public oneSelected = false;
  filtro( index: any,event: any) {

    const checked = event.target.checked;
    if( checked == true){
      this.searchInput.setValue("")
    }

    if(checked === false){
      this.searchInput.setValue("")
      this.projects = this.projectsService.getProjects();
      return;
    } 


    this.projects = this.projectsService.getProjects();
    let filtro:string; 
  for(let i = 0; i < this.tecnologias.length; i++){
    if( i  !== index){
      this.tecnologias[i].isSelected = false
    }else{
      this.tecnologias[i].isSelected= true;
      filtro = this.tecnologias[i].name
    }
  }

  const tecnologiasFiltradas = this.projects.filter(item => {
    return item.tecnologias.some(tec => tec.tecnologia === filtro);

  
  });

  this.projects = tecnologiasFiltradas;
  
  }



  public searchInput = new FormControl("");
  public projectsSeacrhed: project[] = [];
  //incluye?
  elementosConLetra(letras: string){
    let letrasMinusculas = letras.toLowerCase();
    let elementosFiltrados = this.projects.filter(item => item.title.toLowerCase().includes(letrasMinusculas))
    return elementosFiltrados;
  }

  searchProject(){
    this.projects = this.projectsService.getProjects();
    const value: string = this.searchInput.value || '';
    if ( value == ""){
      
      return this.projects = this.projectsService.getProjects();
    } 

    //setear todos los isselected en false
    for(let i = 0; i < this.tecnologias.length; i++){
    
        this.tecnologias[i].isSelected = false
      
    }
    
    let resultado:project[] = this.elementosConLetra(value);
    return this.projects = resultado;
  }

  public selectedProject = undefined
  oneSelectedOption(event: MatAutocompleteSelectedEvent):void{
    if( !event.option.value){
      this.selectedProject = undefined;
      return;
    }

    const project = event.option.value;
    this.searchInput.setValue( project )
    this.projects = this.elementosConLetra( project)
  }


  
}