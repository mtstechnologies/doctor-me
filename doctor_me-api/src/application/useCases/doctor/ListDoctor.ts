import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

export default class ListDoctorUseCase {
  constructor(readonly database: DatabaseService) {}

  async execute() {
    //logica de negocios
    const doctors = await this.database.listDoctor();

    if (!doctors) {
      throw new NotFoundError("No doctors found");
    }
    return doctors;
  }
}
