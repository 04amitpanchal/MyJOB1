export class extrajob{
  constructor(
    public job_id:number,
    public job_title:string,
    public posted_date:string,
    public skill_req:string,
    public job_desc:string,
    public salary_min:number,
    public salary_max:number,
    public fk_rec_id?:string
  ){}
}
