use actix_web::web;
use fcc::models::user_model::User;
use mongodb::{bson::doc, Client, Collection};
use serde::{Deserialize, Serialize};

use super::DB_NAME;
use super::USER;

pub struct MongoWrapper(pub web::Data<Client>);

#[derive(Debug)]
pub enum DbError {
    UserNotFound,
    ConnectionFailure,
}

impl MongoWrapper {
    pub fn get_collection<'a, T>(&'a self, db_name: &str, collection_name: &str) -> Collection<T>
    where
        T: Serialize + Deserialize<'a>,
    {
        let db = self.0.database(db_name);
        let collection: Collection<T> = db.collection(collection_name);
        collection
    }

    pub async fn get_user_by_email(&self, email: &str) -> Result<User, DbError> {
        let filter = doc! {"email": email};
        if let Ok(query) = self
            .get_collection(DB_NAME, USER)
            .find_one(filter, None)
            .await
        {
            if let Some(user_detail) = query {
                Ok(user_detail)
            } else {
                Err(DbError::UserNotFound)
            }
        } else {
            Err(DbError::ConnectionFailure)
        }
    }
}
