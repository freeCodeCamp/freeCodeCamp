use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CompletedChallenge {
    challenge_type: u8,
    completed_date: usize,
    files: Vec<File>,
    github_link: String,
    id: String,
    is_manually_approved: bool,
    solution: String,
}
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SavedChallenge {
    challenge_type: u8,
    files: Vec<File>,
    id: String,
    last_saved_date: usize,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct File {
    pub contents: String,
    pub ext: String,
    pub key: String,
    pub name: String,
    pub path: String,
}
