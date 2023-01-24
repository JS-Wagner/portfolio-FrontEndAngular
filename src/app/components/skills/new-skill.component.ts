import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) {}
  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
    data => {
      alert("skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
        alert("fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }
}
