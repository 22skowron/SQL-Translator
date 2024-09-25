import { Component, computed, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { DataFetchingService } from './services/data-fetching.service';
import { inject } from '@angular/core';
import { EXAMPLE_USER_QUERY } from './utils/exampleValues';
import {
  DefaultCardConfig,
  InputCardConfig,
  GridCardConfig,
} from './interfaces/card-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    CardComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly dataFetchingService = inject(DataFetchingService);

  title = 'SQL-translator';

  queryCardConfig: Signal<InputCardConfig> = computed((): InputCardConfig => {
    return {
      type: 'input',
      title: 'Zapytanie do bazy danych',
      placeholderText: EXAMPLE_USER_QUERY,
      buttonConfig: {
        type: 'submit',
        text: 'Zatwierdź',
      },
      submitAction: (userInput: string) => {
        if (!userInput) {
          console.log('🖊️ User input empty, short-circuiting...');
        } else {
          console.log(`🖊️ User input: ${JSON.stringify(userInput, null, 4)}`);
          this.dataFetchingService.fetchAiAnswers(userInput);
        }
      },
    };
  });

  aiAnswerCardConfig: Signal<DefaultCardConfig> = computed(
    (): DefaultCardConfig => {
      return {
        type: 'default',
        title: 'Odpowiedź Asystenta',
        placeholderText: this.dataFetchingService.formattedAnswer(),
      };
    }
  );

  sqlStatementCardConfig: Signal<DefaultCardConfig> = computed(
    (): DefaultCardConfig => {
      return {
        type: 'default',
        title: 'Tłumaczenie SQL',
        placeholderText: this.dataFetchingService.sqlStatement(),
      };
    }
  );

  gridCardConfig: Signal<GridCardConfig> = computed((): GridCardConfig => {
    return {
      type: 'grid',
      title: 'Dane z bazy',
        buttonConfig: {
        type: 'text',
        text: 'Powrót',
      },
    };
  });

  // queryForm = new FormGroup({
  //   userInput: new FormControl(EXAMPLE_USER_QUERY),
  // });

  // onSubmit() {
  //   const userInput = this.queryForm.value.userInput || '';
  //   if (!userInput) {
  //     console.log('🖊️ User input empty, short-circuiting...');
  //   } else {
  //     console.log(`🖊️ User input: ${JSON.stringify(userInput, null, 4)}`);
  //     this.dataFetchingService.fetchAiAnswers(userInput);
  //   }
  // }
}
