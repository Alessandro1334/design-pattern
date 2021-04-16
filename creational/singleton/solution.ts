namespace SingletonSolution {
    class Me {
        private static instance: Me
        private firstName: string = ''
        private lastName: string = ''

        public static getInstance(): Me {
            if (!Me.instance) {
                Me.instance = new Me()
            } 
            return Me.instance
        }

        getFullName(): string {
            // akses db, select user
            this.firstName = 'Alessandro'
            this.lastName = 'Sinambela'

            return `${this.firstName} ${this.lastName}`
        }
    }
    const profile = Me.getInstance();
    console.log(profile.getFullName())

    const profile1 = Me.getInstance();
    console.log(profile1.getFullName())

    console.log(profile === profile1);
}
