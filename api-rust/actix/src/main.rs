extern crate dotenv;

use actix_identity::IdentityMiddleware;
use actix_session::{storage::CookieSessionStore, SessionMiddleware};
use actix_web::{cookie::Key, middleware::Logger, web, App, HttpServer};
use dotenv::dotenv;
// use fcc::models::user_model::User;
use mongodb::Client;

mod api;
mod boot;
mod middleware;

use api::routes::{challenges_completed, index};
use middleware::send_200_to_non_user;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    std::env::set_var("RUST_LOG", "debug");
    std::env::set_var("RUST_BACKTRACE", "1");
    env_logger::init();

    let uri = std::env::var("MONGOHQ_URL")
        .unwrap_or_else(|_| "mongodb://localhost:27017/freecodecamp".into());

    let client = Client::with_uri_str(uri).await.expect("failed to connect");

    println!("Listening on port: 3002");

    let private_key = std::env::var("JWT_SECRET").unwrap_or_else(|_| "jwt_secret".into());
    HttpServer::new(move || {
        let logger = Logger::default();
        App::new()
            .app_data(web::Data::new(client.clone()))
            .wrap(logger)
            .wrap(IdentityMiddleware::default())
            .wrap(SessionMiddleware::new(
                CookieSessionStore::default(),
                Key::from(private_key.as_bytes()),
            ))
            .wrap(send_200_to_non_user::Send200ToNonUser)
            .service(index)
            .service(challenges_completed)
    })
    .bind(("127.0.0.1", 3002))?
    .run()
    .await
}
