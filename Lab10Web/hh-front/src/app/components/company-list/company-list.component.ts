import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  standalone:true
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => this.companies = data);
  }

  onCompanyClick(id: number): void {
    this.companyService.getVacancies(id).subscribe(data => this.vacancies = data);
  }
}
