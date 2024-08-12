import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: any[] = [];

  constructor(private auth: SupabaseService) { }

  ngOnInit(): void {
    this.fetchtasks();
  }

  fetchtasks() {
    this.auth.fetchtask().subscribe({
      next: (response) => {
        this.tasks = response.data;
        console.log(response.data);
        console.log(this.tasks);
        this.tasks.sort((a, b) => (a.priority < b.priority ? -1 : 1));
        console.log(this.tasks);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deletetaskcard(name: string) {
    const isConfirmed = window.confirm('Do you want to delete this task?');

    if (isConfirmed) {
      this.auth.deletetask(name).subscribe({
        next: (res) => {
          console.log(res);
          if (res.error === null) {
            this.fetchtasks();
          } else {
            console.log('Error occurred!');
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Task deletion cancelled.');
    }
  }


}
