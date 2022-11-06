import { Component, OnInit } from '@angular/core';
import { LabourTableService } from 'src/app/core';
import { LabourCosts, LabourStats } from '../../models/Labour';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  LabourCosts: LabourCosts[] = [];
  directContractors: LabourStats[] = [];
  providers: LabourStats[] = [];
  total: LabourStats[] = [];
  totalWorforce: number = 0;
  order: string = 'name';
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  contractor: boolean = true;

  constructor(private labourTableService: LabourTableService) {}
  ngOnInit(): void {
    this.labourTableService.getDataLabour().subscribe((res) => {
      this.LabourCosts = res;

      this.LabourCosts.map((data) => {
        this.directContractors = data.directContractors;
        this.providers = data.providers;
        this.total = data.total;
      });
      console.log(this.providers);
    });
  }

  getWorkforce(worker: number) {
    let total: LabourStats;
    [total] = this.total;
    let workerpercentaje: number = (100 * worker) / total.workerCount;
    return workerpercentaje.toFixed(1);
  }

  setOrder(value: string = '0') {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    if (value !== 'name') {
      this.contractor = false;
      // merge this.contractor and this.providers
      this.mergeContractorProviders();
    } else {
      this.filterContractorFromProviders();
      this.contractor = true;
    }

    this.order = value;
  }

  mergeContractorProviders() {
    const [contractorObject] = this.directContractors;

    if (!this.providers.includes(contractorObject)) {
      this.providers.push(contractorObject);
    }
  }

  filterContractorFromProviders() {
    this.providers = this.providers.filter(
      (provider) => provider.name !== 'Direct Contractors'
    );
  }
}
