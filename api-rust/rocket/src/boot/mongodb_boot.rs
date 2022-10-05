use mongodb::bson::doc;
use mongodb::Collection;
use rocket_db_pools::mongodb::{self};
use rocket_db_pools::{Connection, Database};
use serde::{Deserialize, Serialize};

use fcc::models::user_model::User;

use super::{DB_NAME, USER};

#[derive(Database)]
#[database("freecodecamp")]
pub struct MongoBoot(mongodb::Client);

pub struct MongoWrapper(pub Connection<MongoBoot>);

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
