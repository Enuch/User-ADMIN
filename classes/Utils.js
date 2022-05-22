class Utils {

    static dateFormat(date) {
        return date.toLocaleDateString('pt-BR', {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }).concat(`\n${date.toLocaleTimeString('pt-BR')}`);
    }

}