import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify ({
        el: '#app',
        data () {
          return {
            pagination: {
              sortBy: 'name'
            },
            selected: [],
            headers: [
              {
                text: 'Patients Data',
                align: 'left',
                value: 'name'
              },
              { text: 'ID', value: 'id' },
              { text: 'Cell Count', value: 'cell_count' },
              { text: 'Blood Count', value: 'blood_count' },
              { text: 'Prediction', value: 'prediction' },
              { text: 'Time', value: 'time' },
              { text: 'Email', value: 'email'},
              { text: 'Contact', value: 'contact'},
              { text: 'Actions', value: 'actions', sortable: false}
            ],
            items: [
              {
                value: false,
                name: 'Waqas Javed',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
                contact: '+491000000'
              },
              {
                value: false,
                name: 'Alveena Mir',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
                contact: '+491000000'
              },
              {
                value: false,
                name: 'Alina M.Raus',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
                contact: '+491000000'
              },
              {
                value: false,
                name: 'Sandra Barakat',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
                contact: '+491000000'
              },
              {
                value: false,
                name: 'Illaria DeRosa',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
               email: 'email',
               contact: '+491000000'
              },
              {
                value: false,
                name: 'Julia Kalinzgi',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
               time: 0,
               email: 'email',
               contact: '+491000000'
              },
              {
                value: false,
                name: 'Bernadet Kósgov',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
               contact: '+491000000'
              },
              {
                value: false,
                name: 'Mùjde Gurbuz',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
                contact: '+491000000'
              },
              {
                value: false,
                name: 'Ena Lallic',
                id: 0,
                cell_count: 0,
                blood_count: 0,
                prediction: 0,
                time: 0,
                email: 'email',
               contact: '+491000000'
              },
              {
                value: false,
                name: 'Hanga Maria',
                id: 0,
               cell_count: 0,
               blood_count: 0,
               prediction: 0,
               time: 0,
               email: 'email',
               contact: '+491000000'
              }
            ]
          }
        },
        methods: {
          toggleAll () {
            if (this.selected.length) this.selected = []
            else this.selected = this.items.slice()
          },
          changeSort (column) {
            if (this.pagination.sortBy === column) {
              this.pagination.descending = !this.pagination.descending
            } else {
              this.pagination.sortBy = column
              this.pagination.descending = false
            }
          }
        }
      })
    

