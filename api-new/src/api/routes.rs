use crate::boot::mongodb_boot::MongoBoot;

#[get("/")]
pub fn index() -> &'static str {
    "Hello, world!"
}

#[post("/challenges-completed")]
pub fn challenges_completed(db: MongoBoot) -> &'static str {
    println!("{:?}", db.get_user_by_email("dev@freecodecamp.org"));
    "Hello, world!"
}
