import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Raf' },
      { id: 12, name: 'Kristof' },
      { id: 13, name: 'Lotte' },
      { id: 14, name: 'Yana' },
      { id: 15, name: 'Peter' },
      { id: 16, name: 'Antoine' },
      { id: 17, name: 'Samuel' },
      { id: 18, name: 'Jonas' },
      { id: 19, name: 'Philip' },
      { id: 20, name: 'Kevin' }
    ];
    return {heroes};
  }
}

