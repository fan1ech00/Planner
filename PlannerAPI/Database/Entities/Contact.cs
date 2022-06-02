﻿using System;
using System.Collections.Generic;

namespace PlannerAPI.Database.Entities
{
    public partial class Contact
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public Color? Color { get; set; }
        public string AccountId { get; set; }

        public virtual Account Account { get; set; } = null!;
        public virtual ICollection<Action> Actions { get; set; }
        public virtual WaitingAction? WaitingAction { get; set; } = null!;

    }
}
