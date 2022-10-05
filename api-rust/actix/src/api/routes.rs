use actix_identity::Identity;
use actix_web::{get, post, web, HttpResponse, Responder};
use fcc::models::challenge_model::CompletedChallenge;
use mongodb::Client;

use crate::boot::mongodb_boot::MongoWrapper;

#[get("/")]
pub async fn index(id: Identity) -> impl Responder {
    println!(
        "ID: {:?}",
        id.id().unwrap_or_else(|_| "Anonymous".to_owned())
    );
    HttpResponse::Ok().body("Hello world!")
}

#[post("/challenges-completed")]
pub async fn challenges_completed(
    db_client: web::Data<Client>,
    challenges: web::Json<Vec<CompletedChallenge>>,
) -> impl Responder {
    println!("{:?}", challenges);
    let mongo_wrapper = MongoWrapper(db_client);

    match mongo_wrapper.get_user_by_email("bar@bar.com").await {
        Ok(user) => {
            println!("Found user: {:?}", user.username);
        }
        Err(e) => println!("Error: {:?}", e),
    };
    HttpResponse::Ok().body("challenges-completed")
}

// #[get("/user/get-session-user")]
// pub async fn get_session_user() {}
