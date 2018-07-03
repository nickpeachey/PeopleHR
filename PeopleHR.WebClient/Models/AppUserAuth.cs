using System;
using System.ComponentModel.DataAnnotations;

namespace PeopleHR.WebClient.Models
{
    public class AppUserAuth
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public Boolean CanAccessProducts { get; set; }
    }
}
